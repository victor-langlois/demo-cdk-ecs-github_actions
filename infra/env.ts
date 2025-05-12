const {
  AWS_REGION = "",
  AWS_ACCOUNT_ID = "954836797250",
  APPLICATION_ID = "demo",
  ENVIRONMENT = "dev",
  AWS_VPC_ID = "",
  IMAGE_TAG = "",
} = process.env;

export {
  APPLICATION_ID,
  AWS_ACCOUNT_ID,
  AWS_REGION,
  AWS_VPC_ID,
  ENVIRONMENT,
  IMAGE_TAG,
};
export const PREFIX = `${APPLICATION_ID}-${ENVIRONMENT}`;
