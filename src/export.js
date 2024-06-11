import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

// COMPONENTS 
import Navbar from './components/Navbar';
import PopularNews from "./components/PopularNews";

// LAYOUT
import Layout from "./layouts/Layout";
// FETCH 
import { useFetchTopHeadlines } from "./functions/FetchApi";

export {Route, Router, Routes, Link, useParams, useState, useEffect, lazy, Suspense, Navbar, Layout, PopularNews, useFetchTopHeadlines}