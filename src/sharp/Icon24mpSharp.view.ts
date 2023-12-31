import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon24mpSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15 14h1.5v1.5H15z\"/><path d=\"M3 3v18h18V3H3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5V8zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM18 17h-3v1.5h-1.5v-6H18V17zm.5-7h-1v1.5H16V10h-3V5.5h1.5v3H16v-3h1.5v3h1V10z\"/>")
      .name("Icon24mpSharp")
  }
}

export default Icon24mpSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
