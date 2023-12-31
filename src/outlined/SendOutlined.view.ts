import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SendOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m4.01 6.03 7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3z\"/>")
      .name("SendOutlined")
  }
}

export default SendOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
