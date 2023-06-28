import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = (name, activeTab, onHandleSearchType) => {
  <TouchableOpacity>
    <Text style={{fontSize:SIZES.h3}}>
    </Text>
  </TouchableOpacity>
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
        onHandleSearchType={() =>
        setActiveTab(item)}
        />
      )}
      />
    </View>
  )
}

export default Tabs