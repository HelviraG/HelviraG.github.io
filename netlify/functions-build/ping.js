"use strict";
export const handler = async (event, context) => {
  console.log("ping called");
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, time: Date.now() })
  };
};
