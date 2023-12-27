import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class NoteFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"m22 10-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5 5.5 5.5H15V5.5z\"/>")
      .name("NoteFilled")
  }
}

export default NoteFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
