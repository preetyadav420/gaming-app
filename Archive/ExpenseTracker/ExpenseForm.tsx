import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";

interface IFormInput {
  description: string;
  Amount: string;
  category: string;
}

function ExpenseForm(props: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    props.onSubmit(data);
    reset();
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">Description</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter description"
        {...register("description", {
          required: true,
          minLength: 3,
          maxLength: 20,
          pattern: /^\S(?:[\s\S]*\S)?$/,
        })}
      />
      {errors.description && (
        <p role="alert" style={{ color: "red" }}>
          {errors.description.type === "required" && "Description is required"}
          {errors.description.type === "minLength" &&
            "Description must be at least 3 characters long"}
          {errors.description.type === "maxLength" &&
            "Description must be at most 20 characters long"}
          {errors.description.type === "pattern" &&
            "Description cannot start or end with whitespace"}
        </p>
      )}

      <label className="form-label">Amount</label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        {...register("Amount", { required: true, min: 0, max: 999999 })}
      />

      {errors.Amount && (
        <p role="alert" style={{ color: "red" }}>
          {errors.Amount.type === "min" && "Amount must be at least 0"}
          {errors.Amount.type === "max" && "Amount must be at most 999999"}
          {errors.Amount.type === "required" && "Amount is required"}
        </p>
      )}

      <label className="form-label">Category</label>
      <select className="form-select" {...register("category")}>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <input className="btn btn-primary" type="submit" />
    </form>
  );
}

export default ExpenseForm;
