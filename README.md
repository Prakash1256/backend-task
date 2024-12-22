# Development of a System for Extracting Live Share Market Data using IIFL Trading APIs

## Overview

- This system extracts live share market data for specified scrips using IIFL Trading APIs and updates a SQL Server database every 60 seconds. It is designed to run on a Windows OS machine with SQL Server installed.

# Features

## Functional Requirements

- Data Extraction: Connects to the IIFL MarketFeed API to fetch live market data every 60 seconds.

- Data Loading: Validates and inserts the data into a SQL Server database.

- API Error Handling: Implements retry mechanisms for API errors such as connection failures or timeouts.

- Logging: Logs API requests, responses, and any encountered errors.

- Scheduling: Runs as a scheduled task on Windows OS.

- Configuration: Provides a configuration file for specifying API keys, scrips, database connection strings, and other runtime parameters.

- System Health Monitoring: Monitors system health and generates alerts for failures.

- Non-Functional Requirements

- Performance: Completes API calls and data updates within 60 seconds.

- Scalability: Handles an increasing number of scrips.

- Security: Secures API keys and sensitive data.

- Reliability: Operates continuously with minimal downtime.

- Maintainability: Offers a well-documented and modular codebase.

- Technology Stack

- Programming Language: Node.js, ExpressJs, 

- API Integration: RESTful API

- Database: Microsoft SQL Server

- Scheduling: Windows Task Scheduler

- Logging: Nodejs logging module

- Monitoring Tools: Windows Event Viewer or custom scripts

## Installation and Setup

# Prerequisites:

- Windows OS with SQL Server installed

- Access to IIFL MarketFeed API keys

## Steps:

## Clone the repository.

- Configure config.json with API keys, scrips, and database connection details.

- Deploy the script and configure it to run using Windows Task Scheduler every 60 seconds.
