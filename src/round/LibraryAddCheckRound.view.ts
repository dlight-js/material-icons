import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty, ForwardProps, type PropertyWithEvent } from "@dlightjs/types"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProps
class LibraryAddCheckRound {
  View() {
    DLightIcon()
      .forwardProps()
      .content("<path d=\"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4a.996.996 0 0 1 1.41 0l1.36 1.37 4.42-4.46a.996.996 0 0 1 1.41 0c.38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z\"/>")
      .name("LibraryAddCheckRound")
  }
}

export default LibraryAddCheckRound as Pretty as Typed<DLightIconType, PropertyWithEvent<HTMLSpanElement>>
