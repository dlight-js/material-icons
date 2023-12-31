import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AddBusinessTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M15.36 9H3.64l-.6 3h12.92z\" opacity=\".3\"/><path d=\"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z\"/><path d=\"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z\"/>")
      .name("AddBusinessTwoTone")
  }
}

export default AddBusinessTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
