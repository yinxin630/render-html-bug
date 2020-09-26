import React, { Component } from "react";
import { View } from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const html = "<div><p>111<p><span>222</span><p>333</p></div>";
    return (
      <View className='index'>
        <View dangerouslySetInnerHTML={{ __html: html }}></View>
      </View>
    );
  }
}
