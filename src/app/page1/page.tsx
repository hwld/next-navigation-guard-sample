"use client";

import { useNavigationGuard } from "next-navigation-guard";

export default function Page1() {
  useNavigationGuard({ enabled: false });

  return (
    <div className="grid h-screen place-content-center place-items-center">
      page1 <br /> with useNavigationGuard
    </div>
  );
}
