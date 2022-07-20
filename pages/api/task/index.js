import supabase from "../../../supabase";

const index = async (req, res) => {
  console.log("req.body");
  const { method } = req;
  console.log("method", method);
  // create a new task
  if (method === "POST") {
    const {task , completed, email} = req.body;
    try {
      const { data, error } = await supabase
        .from("tasklist")
        .insert([{ task: task, completed: completed, email: email }]);
      if (data) {
        res.status(201).json({
          data: data,
          message: "Task created successfully",
        });
      } else {
        res.status(500).json({
          error,
          msgessage: "Task not created",
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
        message: 'error.message',
      });
      console.log(error);
      console.log('error', error);
    }
  }
  // get all tasks by email
  if (method === "GET") {
    try {
      let { email } = req.query;
      let { data: tasklist, error } = await supabase
        .from("tasklist")
        .select("*")

        // Filters
        .eq("email", email);
      if (tasklist) {
        res.status(200).json({
          data: tasklist,
          message: "Tasks fetched successfully",
        });
      } else {
        res.status(500).json({
          error,
        });
      }
    } catch (error) {
      console.log("error", error);
      res.status(500).json({
        message: error.message,
      });
      console.log(error);
    }
  }
};
// export default index;
module.exports = index