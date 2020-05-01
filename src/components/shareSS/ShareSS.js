import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ShareSS = (props) => (
  <div>
    <button>
      <a
        href={`https://twitter.com/intent/tweet?text=${props.textShare}-${props.authorShare}&hashtags=randomquote`}
        rel='noopener noreferrer'
        target='_blank'
        id='tweet-quote'
      >
        <FontAwesomeIcon icon={faTwitter} size='lg'></FontAwesomeIcon>
      </a>
    </button>

    <button>
      <a
        href={`https://wa.me/?text=${props.textShare}-${props.authorShare}`}
        target='_blank'
        rel='noopener noreferrer'
        id='whatsapp-quote'
      >
        <FontAwesomeIcon icon={faWhatsapp} size='lg'></FontAwesomeIcon>
      </a>
    </button>
  </div>
);

export default ShareSS;
