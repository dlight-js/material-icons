import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon17mpSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3v18h18V3H3zm4 2.5h3v6H8.5V7H7V5.5zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM12 7V5.5h4.87l-1.87 6h-1.75L14.62 7H12zm6 10h-3v1.5h-1.5v-6H18V17z\"/><path d=\"M15 14h1.5v1.5H15z\"/>")
      .name("Icon17mpSharp")
  }
}

export default Icon17mpSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
