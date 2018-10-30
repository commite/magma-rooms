import React, { Component, Fragment } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
} from 'react-native'
import { Agenda } from 'react-native-calendars'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getRooms, roomsSelector } from '../../redux/rooms'
import { PanelBooking } from '../../components/PanelBooking'

const today = new Date()

const containerMarginHorizontal = 10
const containerPadding = 10
var width =
    Dimensions.get('window').width -
    containerMarginHorizontal * 2 -
    containerPadding * 2

const firstMinute = 8 * 60 // 8 de la mañana
const lastMinute = 20 * 60 // 8 de la tarde
const totalMinutes = lastMinute - firstMinute
const getWidth = minutes => {
    return (minutes * width) / totalMinutes
}

@connect(
    state => ({
        isLoading: state.rooms.isLoading,
        rooms: roomsSelector.all(state),
    }),
    dispatch => bindActionCreators({ getRooms }, dispatch)
)
export class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: {},
            roomSelectedId: 'sala1',
            dateSelected: today.toISOString().split('T')[0],
            startDate: undefined,
            endDate: undefined,
            bookedBy: undefined,
        }
    }

    render() {
        const {
            items,
            roomSelectedId,
            dateSelected,
            startDate,
            endDate,
            bookedBy,
        } = this.state
        return (
            <Fragment>
                <Agenda
                    items={items}
                    loadItemsForMonth={this.loadItems.bind(this)}
                    minDate={today}
                    selected={today}
                    onDayPress={this.onDayPress.bind(this)}
                    renderDay={(day, item) => {
                        return <View />
                    }}
                    renderItem={this.renderItem.bind(this)}
                    renderEmptyDate={this.renderEmptyDate.bind(this)}
                    rowHasChanged={this.rowHasChanged.bind(this)}
                />
                <PanelBooking
                    roomSelecedId={roomSelectedId}
                    dateSelected={dateSelected}
                    startDate={startDate}
                    endDate={endDate}
                    bookedBy={bookedBy}
                />
            </Fragment>
        )
    }

    onDayPress({ dateString }) {
        this.setState({ dateSelected: dateString })
    }

    loadItems(day) {
        for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000
            const strTime = this.timeToString(time)
            if (!this.state.items[strTime]) {
                this.state.items[strTime] = [
                    {
                        name: 'Corcovado',
                        bookings: [
                            {
                                start: firstMinute,
                                end: 10 * 60 + 15,
                                user: undefined,
                            },
                            {
                                start: 10 * 60 + 15,
                                end: 12 * 60,
                                user: 'I',
                            },
                            {
                                start: 12 * 60,
                                end: 13 * 60,
                                user: undefined,
                            },
                            {
                                start: 13 * 60,
                                end: 14 * 60 + 22,
                                user: 'C',
                            },
                            {
                                start: 14 * 60 + 22,
                                end: lastMinute,
                                user: undefined,
                            },
                        ],
                    },
                    {
                        name: 'Etna',
                        bookings: [
                            {
                                start: firstMinute,
                                end: lastMinute,
                                user: undefined,
                            },
                        ],
                    },
                    {
                        name: 'Fuji',
                        bookings: [
                            {
                                start: firstMinute,
                                end: lastMinute,
                                user: undefined,
                            },
                        ],
                    },
                    {
                        name: 'Teide',
                        bookings: [
                            {
                                start: firstMinute,
                                end: lastMinute,
                                user: undefined,
                            },
                        ],
                    },
                    {
                        name: 'Colab',
                        bookings: [
                            {
                                start: firstMinute,
                                end: lastMinute,
                                user: undefined,
                            },
                        ],
                    },
                    {
                        name: 'Parking',
                        bookings: [
                            {
                                start: firstMinute,
                                end: lastMinute,
                                user: undefined,
                            },
                        ],
                    },
                ]
            }
        }
        const newItems = {}
        Object.keys(this.state.items).forEach(key => {
            newItems[key] = this.state.items[key]
        })
        this.setState({
            items: newItems,
        })
    }

    renderItem({ name, bookings }) {
        return (
            <View style={[styles.item, { height: 100 }]}>
                <Text>{name}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    {bookings.map(booking => (
                        <TouchableHighlight
                            key={`${name}${booking.start}`}
                            onPress={() =>
                                this.setState({
                                    roomSelectedId: name,
                                    startDate: bookings.start,
                                    endDate: bookings.end,
                                    bookedBy: bookings.user,
                                })
                            }
                        >
                            <View
                                style={{
                                    width: getWidth(
                                        booking.end - booking.start
                                    ),
                                    backgroundColor: !!booking.user
                                        ? 'red'
                                        : 'grey',
                                    height: !!booking.user ? 30 : 10,
                                }}
                            />
                        </TouchableHighlight>
                    ))}
                </View>
            </View>
        )
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        )
    }

    rowHasChanged(r1, r2) {
        return r1.bookings.length !== r2.bookings.length
    }

    timeToString(time) {
        const date = new Date(time)
        return date.toISOString().split('T')[0]
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: containerPadding,
        marginHorizontal: containerMarginHorizontal,
        marginTop: 4,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },
})
