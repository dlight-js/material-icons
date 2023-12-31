import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ModeTwoTone {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M14.06 9.02 5 18.08V19h.92l9.06-9.06z\" opacity=\".3\"/><path d=\"M18.37 3.29c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34zm-.56 6.65-3.75-3.75L3 17.25V21h3.75L17.81 9.94zM5 19v-.92l9.06-9.06.92.92L5.92 19H5z\"/>")
      .name("ModeTwoTone")
  }
}

export default ModeTwoTone as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
