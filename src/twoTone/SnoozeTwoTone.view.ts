import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class SnoozeTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9zm8.337-9.19 4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0 1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z\"/>")
      .name("SnoozeTwoTone")
  }
}

export default SnoozeTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
