import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView, Text, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';


const DogWalkerProfile = ({ navigation }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [timeSlots, setTimeSlots] = useState([]);
    

    const handleDayPress = (day) => {
        setSelectedDay(day);
        const paddedMonth = String(day.month).padStart(2, '0');
        const paddedDay = String(day.day).padStart(2, '0');
    
        // Create an array to map numbers to month names
        const months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
        const date = `${months[day.month]}_${paddedDay}_${day.year}`; // Modify this to match your document IDs
    
        db.collection('timeSlots').doc(date).get().then(doc => {
            if (doc.exists) {
                const slots = Object.values(doc.data()); // Convert the document data into an array of slots
                const availableSlots = slots.filter(slot => !slot.booked); // Filter out booked slots
                setTimeSlots(availableSlots);
            } else {
                console.log('No such document!', date);
            }
        }).catch(error => {
            console.log('Error getting document:', error);
        });
    };    

    const handleSlotPress = (slot) => {
        setSelectedSlot(slot);
    };

    const handleBookAppointment = () => {
        // Pass the selectedSlot to the PaymentScreen as a parameter
        navigation.navigate('PaymentScreen', { slot: selectedSlot });
      };

    return (
        <SafeAreaView style={styles.container}>
          <Calendar onDayPress={handleDayPress} />
          <ScrollView style={styles.scrollview}>
            {timeSlots.map((slot, index) => (
              <TouchableOpacity 
                key={index} 
                onPress={() => handleSlotPress(slot)} 
                style={styles.timeslot}
              >
                <Text style={styles.timeslotText}>
                  {`${slot.start} - ${slot.end} Duration: ${slot.duration} hour Price: $${slot.price}`}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {selectedSlot && (
            <>
              <Text style={styles.selectedSlot}>
                {`Selected Slot: ${selectedSlot.start} - ${selectedSlot.end}`}
              </Text>
              <Button title="Book Appointment" onPress={handleBookAppointment} />
            </>
          )}
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
      },
      scrollview: {
        marginVertical: 20,
      },
      timeslot: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
      },
      timeslotText: {
        fontSize: 16,
      },
      selectedSlot: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      },
    });
    
    export default DogWalkerProfile;