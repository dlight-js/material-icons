import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class FmdBadTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 15h2v-2h-2v2zm0-4h2V6h-2v5zm1-9c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm0 17.33c-4.05-3.7-6-6.79-6-9.14C6 6.57 8.65 4 12 4s6 2.57 6 6.2c0 2.34-1.95 5.44-6 9.13z\"/><path d=\"M12 19.33c4.05-3.7 6-6.79 6-9.14C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.13zM11 6h2v5h-2V6zm0 7h2v2h-2v-2z\" opacity=\".3\"/>")
      .name("FmdBadTwoTone")
  }
}

export default FmdBadTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
