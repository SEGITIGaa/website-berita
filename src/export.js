import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

// COMPONENTS 
import Navbar from './components/Navbar';
import Category from "./components/Category";
import PopularNews from "./components/PopularNews";
import {TopHeadlinesCard, PopularNewsCard} from "./components/Card";
import {Loading, TopHeadlinesLoading, PopularNewsLoading} from "./components/Loading";

// LAYOUT
import Layout from "./layouts/Layout";
// FETCH 
import { useFetchTopHeadlines } from "./functions/FetchApi";

export {Route, Router, Routes, Link, useParams, useState, useEffect, lazy, Suspense, Navbar, Layout, PopularNews, useFetchTopHeadlines, TopHeadlinesCard, PopularNewsCard, Loading, TopHeadlinesLoading, PopularNewsLoading, Category, useLocation}