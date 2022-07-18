import supabase from "../../../supabase";

const id = async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  // update  task by id
  if (method === "PUT") {
    try {
      const { data, error } = await supabase
        .from("tasklist")
        .update({ completed: req.body.completed , task: req.body.task})
        .eq("id", id);
      if (data) {
        res.status(200).json({
          data: data,
          message: "Task updated successfully",
        });
      } else {
        res.status(500).json({
          error,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
      console.log(error);
    }
  }
  // delete task by id
  if (method === "DELETE") {
    try {
      const { data, error } = await supabase
        .from("tasklist")
        .delete()
        .eq("id", id);
      if (data) {
        res.status(200).json({
          message: "Task deleted successfully",
        });
      } else {
        res.status(500).json({
          error,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
      console.log(error);
    }
  }
};
export default id;