import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ElevatorOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15v-4h1v-2.5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V14h1v4h3zM8.5 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM18 11l-2.5-4-2.5 4h5zm-5 2 2.5 4 2.5-4h-5z\"/>")
      .name("ElevatorOutlined")
  }
}

export default ElevatorOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
