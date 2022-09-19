import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CustomCircleEvent } from "../../models/event.model"
import CreateEditBody from "./components/create-edit-body/CreateEditBody"
import CreateEditHeader from "./components/create-edit-header/CreateEditHeader"
import { eventMap } from "./event-mock-data"

const CreateEditPage = () => {
  const[event, setEvent] = useState<CustomCircleEvent>()
  let { id } = useParams()

  useEffect(() => {
    if (id && eventMap[+id]) {
      setEvent(eventMap[+id])
    }
  }, [id])
  

  return (
    <section>
      <CreateEditHeader></CreateEditHeader>
      <CreateEditBody customCircleEvent={event}></CreateEditBody>
    </section>
  )
}

export default CreateEditPage
