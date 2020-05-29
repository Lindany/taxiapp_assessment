import React, { Component } from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import banner2 from '../../images/banner2.jpg';
import pretoriaTvbanner from '../../images/pretoriaTvbanner.jpg';
import './Header.css';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;
export default class Header extends Component {
    render(){
        return (
          <BannerAnim prefixCls="banner-user" autoPlay>
            <Element 
              prefixCls="banner-user-elem"
              key="0"
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  background: '#364D79',
                }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                Pretoria TV
              </TweenOne>
              <TweenOne className="banner-user-text" 
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
               Go Monate Mo!
              </TweenOne>
            </Element>
            <Element 
              prefixCls="banner-user-elem"
              key="1" 
            >
              <BgElement
                key="bg"
                className="bg"
                style={{
                  background: '#64CBCC',
                }}
              />
              <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
               Mahlalela Entertainment
              </TweenOne>
              <TweenOne className="banner-user-text" 
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
               Go Monate Mo!
              </TweenOne>
            </Element>
          </BannerAnim>);
      }
    }
