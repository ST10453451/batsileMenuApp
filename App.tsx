import React, { useState } from 'react';
import { Button, FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type MenuItem = {
  name: string;
  price: number;
  description: string;
  image: string;
  course: 'Starter' | 'Main' | 'Dessert';
};

const initialMenuItems: MenuItem[] = [
  { name: 'Sea First', price: 89.99, description: 'Gourmet Rice and Salmon', image: 'https://images.unsplash.com/photo-1577004686904-1a4f118acf61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN0YXJ0ZXJ8ZW58MHx8MHx8fDA%3D', course: 'Starter' },
  { name: 'Garlic Bread', price: 59.99, description: 'Fresh bread with garlic butter', image: 'https://images.unsplash.com/photo-1676976198546-18595f0796f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D', course: 'Starter' },
  { name: 'Bruschetta', price: 59.99, description: 'Grilled bread with tomatoes', image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJ1c2NoZXR0YXxlbnwwfHwwfHx8MA%3D%3D', course: 'Starter' },
  { name: 'Steak', price: 229.99, description: 'Grilled steak with sides', image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RlYWt8ZW58MHx8MHx8fDA%3D', course: 'Main' },
  { name: 'Chicken Alfredo', price: 119.99, description: 'Creamy pasta with chicken', image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JlYW15JTIwcGFzdGF8ZW58MHx8MHx8fDA%3D', course: 'Main' },
  { name: 'Salmon Fillet', price: 124.99, description: 'Pan-seared salmon', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D', course: 'Main' },
  { name: 'Cheesecake', price: 68.99, description: 'Creamy cheesecake', image: 'https://images.unsplash.com/photo-1676300186833-057912886971?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWVzZWNha2V8ZW58MHx8MHx8fDA%3D', course: 'Dessert' },
  { name: 'Chocolate Lava Cake', price: 59.99, description: 'Molten chocolate cake', image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNob2NvbGF0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D', course: 'Dessert' },
  { name: 'Tiramisu', price: 48.99, description: 'Italian coffee-flavored dessert', image: 'https://images.unsplash.com/photo-1542326237-94b1c5a538d4?w=500&auto=format&fit=crop&q=60&ixib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D', course: 'Dessert' },
];

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [selectedCourse, setSelectedCourse] = useState<'Starter' | 'Main' | 'Dessert' | 'All'>('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState<MenuItem>({ name: '', price: 0, description: '', image: '', course: 'Starter' });

  
  const filteredMenuItems = selectedCourse === 'All' ? menuItems : menuItems.filter(item => item.course === selectedCourse);

 
  const calculateAveragePrice = (items: MenuItem[]): number => {
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    return items.length > 0 ? totalPrice / items.length : 0;
  };

  const handleAddItem = () => {
    setMenuItems([...menuItems, newItem]);
    setModalVisible(false);
    setNewItem({ name: '', price: 0, description: '', image: '', course: 'Starter' });
  };

  const handleRemoveItem = (index: number) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>

      
      <View style={styles.averagePriceContainer}>
        <Text>
          Average Price: R{calculateAveragePrice(filteredMenuItems).toFixed(2)}
        </Text>
      </View>

      
      <View style={styles.filterContainer}>
        <Text>Filter by Course: </Text>
        <TouchableOpacity onPress={() => setSelectedCourse('All')}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCourse('Starter')}>
          <Text>Starter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCourse('Main')}>
          <Text>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedCourse('Dessert')}>
          <Text>Dessert</Text>
        </TouchableOpacity>
      </View>
      <Text>Total Items: {filteredMenuItems.length}</Text>

      <FlatList
        data={filteredMenuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.menuItem}>
            <Image source={{ uri: item.image }} style={styles.menuImage} />
            <View>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>Price: R{item.price.toFixed(2)}</Text>
              <Text>Course: {item.course}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(index)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Add New Item</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={newItem.name}
            onChangeText={(text) => setNewItem({ ...newItem, name: text })}
          />
          <TextInput
            placeholder="Price"
            style={styles.input}
            keyboardType="numeric"
            value={newItem.price.toString()}
            onChangeText={(text) => setNewItem({ ...newItem, price: parseFloat(text) })}
          />
          <TextInput
            placeholder="Description"
            style={styles.input}
            value={newItem.description}
            onChangeText={(text) => setNewItem({ ...newItem, description: text })}
          />
          <TextInput
            placeholder="Image URL"
            style={styles.input}
            value={newItem.image}
            onChangeText={(text) => setNewItem({ ...newItem, image: text })}
          />
          <TextInput
            placeholder="Course (Starter/Main/Dessert)"
            style={styles.input}
            value={newItem.course}
            onChangeText={(text) => setNewItem({ ...newItem, course: text as 'Starter' | 'Main' | 'Dessert' })}
          />
          <Button title="Add Item" onPress={handleAddItem} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

    
      <Button title="Add New Item" onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  filterContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  averagePriceContainer: { marginBottom: 20 },
  menuItem: { flexDirection: 'row', marginVertical: 10 },
  menuImage: { width: 100, height: 100, marginRight: 10 },
  menuName: { fontWeight: 'bold', fontSize: 18 },
  removeText: { color: 'red', marginTop: 5 },
  modalContainer: { flex: 1, justifyContent: 'center', padding: 20 },
  modalHeader: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
});
