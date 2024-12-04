# Restaurant Menu API

## Overview

This is a **GraphQL API** built with **Node.js** and **Express** to serve data for a restaurant menu application. It supports querying different categories of menu items, such as appetizers, entrees, soups, salads, and more. The API uses a structured JSON file (`menu.json`) as the data source.

The API includes special handling for:
- Mixed price structures (e.g., flat prices and combo prices).
- Nested data types like combo pricing for soups and salads.

---

## Features

- Fetch menu items by category (appetizers, entrees, soups and salads, etc.).
- Supports both flat and complex price structures.
- Fully tested with **Jest** and **Supertest**.
- Easy to extend with additional menu categories or functionality.

---

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

---

## Getting Started

### Step 1: Clone the Repository
Clone the repository and navigate to the project directory:
```bash
git clone <repository_url>
cd restaurant-menu-api
