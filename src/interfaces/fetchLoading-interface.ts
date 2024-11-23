export type FetchLoadingStateProps = {
  status: "sucess" | "failed" | "warning";
  message: string;
  appear: boolean;
}