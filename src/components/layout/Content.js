import React from "react";
import Sidebar1 from "./navbar";
import { Tasks } from "../Tasks";

export const Content = () => (
  <section className="content">
    <Sidebar1 />
    <Tasks />
  </section>
);
