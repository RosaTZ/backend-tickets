import httpTicket from "../controllers/ticket.js"
import { Router } from "express"

const router = Router()
  
  router.post("/", httpTicket.postTicket)

  router.get("/", httpTicket.getTicket)
  
  router.get("/:id", httpTicket.getTicketId)
  
  router.put("/:id", httpTicket.putTicket)

  router.delete("/:id", httpTicket.deleteTicket)
  
  export default router