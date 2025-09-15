"use client";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useNav() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return {
    push: (path: string) => navigate(path),
    replace: (path: string) => navigate(path, { replace: true }),
    back: () => navigate(-1),
    getParam: (key: string) => searchParams.get(key),
    setParam: (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      setSearchParams(params);
    },
  };
}