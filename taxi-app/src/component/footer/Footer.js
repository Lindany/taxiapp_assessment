import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <a
  href="https://web.facebook.com/PretoriaTV"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/pretoriatv?lang=en" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/pretoria_insta/"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>

<a
  href="https://www.youtube.com/channel/UC-J0sdaVw2WLIpfZi75Ua7A"
  className="instagram social"
>
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
            </div>
        )
    }
}
