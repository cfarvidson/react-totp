import React, { useState, useRef, useEffect } from "react";
import _ from "lodash";

import { generateTOTP } from "../totp";
import { numberWithSpaces } from "../utils";

const generateToken = (secret) => {
  const totp = generateTOTP(secret);
  return _.padStart(totp, 6, "0");
};

export default () => {
  const [secret, setSecret] = useState(null);
  const [totp, setTotp] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (secret) {
      const interval = setInterval(() => {
        setTotp(generateToken(secret));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [secret]);

  const handleSubmit = () => {
    try {
      const secret = inputRef.current.value.replace(/\s/g, "");
      setTotp(generateToken(secret));
      setSecret(secret);
    } catch {
      setError("Invalid secret, please enter a valid secret");
    }
  };

  if (secret) {
    return (
      <>
        <p className="is-size-1 has-text-centered">{numberWithSpaces(totp)}</p>
        <p className="content has-text-centered pt-4">
          <div className="control">
            <button
              className="button is-danger"
              type="submit"
              onClick={() => setSecret(null)}
            >
              Reset
            </button>
          </div>
        </p>
      </>
    );
  } else {
    return (
      <>
        <div className="field">
          <label className="label">Secret</label>
          <div className="control">
            <input
              className="input"
              type="password"
              ref={inputRef}
              placeholder="ABCD 1234 ABCD 1234"
            />
          </div>
          {error && <p className="help is-danger">{error}</p>}
          <p className="help">
            The secret code that you used to create your TOTP in the first
            place.
          </p>
        </div>

        <div className="control has-text-centered pt-3">
          <button
            className="button is-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Generate
          </button>
        </div>
      </>
    );
  }
};
