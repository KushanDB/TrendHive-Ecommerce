import express from 'express';

const studentRouter = express.Router();

studentRouter.get("/",
    () => {
        console.log("Get request into  studentRouter");
    }
);

studentRouter.post("/",
    () => {
        console.log("Post request into  studentRouter");
    }
);

studentRouter.put("/",
    () => {
        console.log("Put request into  studentRouter");
    }
);

studentRouter.delete("/",
    () => {
        console.log("Delete request into  studentRouter");
    }
);

export default studentRouter;  