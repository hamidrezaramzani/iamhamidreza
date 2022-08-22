import React, { useState } from "react";
import { new_project } from "./styles.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
function NewExperience() {
  const [isCurrent, setIsCurrent] = useState(false);
  const schema = yup.object().shape({
    job_stack: yup.string().required("it can not be empty"),
    company: yup.string().required("it can not be empty"),
    start_date: yup.string().required("it can not be empty"),
    end_date: yup.string(),
    description: yup.string().required("it can not be empty"),
    is_current: yup.bool(),
  });

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (values) => {
    try {
      await axios.post("/api/experience/new", values);
      router.push("/experience/manage");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "we have an error in the server",
        icon: "error",
      });
    }
  };

  const handleIsCurrentChange = () => {
    setIsCurrent((state) => !state);
  };

  return (
    <div className={new_project}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          type="text"
          name="job_stack"
          placeholder="Job Stack"
          className={"input"}
          {...register("job_stack")}
        />
        <span className="error-label">{errors.job_stack?.message}</span>


        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className={"input"}
          {...register("company")}
        />
        <span className="error-label">{errors.company?.message}</span>


        <input
          type="date"
          name="start_date"
          placeholder="Start Date"
          className={"input"}
          {...register("start_date")}
        />
        <span className="error-label">{errors.start_date?.message}</span>

        <input
          type="date"
          name="end_date"
          placeholder="End Date"
          disabled={isCurrent}
          className={"input"}
          {...register("end_date")}
        />
        <span className="error-label">{errors.end_date?.message}</span>
        <div>
          <label htmlFor="is_current" style={{ color: "white" }}>
            is current
          </label>
          <input
            type="checkbox"
            onClick={handleIsCurrentChange}
            name="is_current"
            id="is_current"
            value={isCurrent}
            placeholder="Is Current"
            {...register("is_current")}
          />
        </div>
        <br />
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          className={"input"}
          {...register("description")}
        />
        <span className="error-label">{errors.description?.message}</span>
        <button className="button">New</button>
      </form>
    </div>
  );
}

export default NewExperience;
