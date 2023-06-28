import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = () => {

}
const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View>
      <FlatList
      data={tabs}
      renderItem={({ item }) => (
        <TabButton
        name={item}
        activeTab={activeTab}
        />
      )}
      />
    </View>
  )
}

export default Tabs