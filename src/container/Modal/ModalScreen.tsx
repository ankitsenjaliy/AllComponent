import React, {useState} from 'react';
import {View, Modal, Text, Pressable, Alert} from 'react-native';
import {styles} from './ModalScreenStyle';

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.viewMain}>
      <Pressable
        style={styles.buttonShowModal}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>Show Modal</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalViewContainer}>
          <View style={styles.modalView}>
            <Text style={styles.textModal}>Hello World!</Text>
            <Pressable
              style={styles.buttonHideModal}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textButton}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
