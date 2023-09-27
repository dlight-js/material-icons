import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AddToPhotosTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 4H8v12h12V4zm-1 7h-4v4h-2v-4H9V9h4V5h2v4h4v2z\" opacity=\".3\"/><path d=\"M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zm4-4h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM8 4h12v12H8V4zm7 1h-2v4H9v2h4v4h2v-4h4V9h-4z\"/>")
      .name("AddToPhotosTwoTone")
  }
}

export default AddToPhotosTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>