import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class AddCircleTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 9h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\" opacity=\".3\"/><path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>")
      .name("AddCircleTwoTone")
  }
}

export default AddCircleTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
