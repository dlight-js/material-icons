import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class ViewAgendaOutlined {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4zm0-16H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6H5V5h14v4z\"/>")
      .name("ViewAgendaOutlined")
  }
}

export default ViewAgendaOutlined as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
