import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class PersonPinCircleFilled {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2a2 2 0 1 1 .001 4.001A2 2 0 0 1 12 4zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05A4.783 4.783 0 0 1 12 14z\"/>")
      .name("PersonPinCircleFilled")
  }
}

export default PersonPinCircleFilled as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
