import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class Icon3mpSharp {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M3 3v18h18V3H3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM10 10h3V9h-2V8h2V7h-3V5.5h4.5v6H10V10zm8 7h-3v1.5h-1.5v-6H18V17z\"/><path d=\"M15 14h1.5v1.5H15z\"/>")
      .name("Icon3mpSharp")
  }
}

export default Icon3mpSharp as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
