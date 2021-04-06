import { React } from "react"
import { Bio } from './card_types/Bio'
import { Music } from './card_types/Music'
import { Text } from './card_types/Text'

export const Card = ({name, type, text}) => {
    switch (type) {
        case "bio":
          return <Bio name={name}/>;
          break;
        case "text":
          return <Text name={name} text={text}/>;
          break;
        case "music":
          return <Music name={name} text={text}/>;
          break;
        default:
          return <Bio name="Default"/>;;
      }
}