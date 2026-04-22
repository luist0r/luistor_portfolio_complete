# Editorial Commission Desk

## Project Overview

**Editorial Commission Desk** is a full-stack commission portal for an illustration and design practice that works with magazines, brands, and publishers. The application combines a bold, Mondrian-inspired Swiss editorial aesthetic with a complete commission intake flow, client dashboard, and real-time support chat.

## Live URL

https://editorial-commission-desk-pdrzrxotpr.cn-beijing.ucorp-app.com

## Technology Stack

**Frontend:** React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui
**Backend:** Hono + tRPC 11.x + Drizzle ORM + MySQL
**Auth:** Kimi OAuth 2.0 + JWT sessions
**Fonts:** Oswald (headings) + Inter (body)

## Features

### Public Pages
- **Homepage** — Hero with looping studio video, portfolio grid, 3-step process explanation, active talent roster table, and multi-step commission inquiry form
- **Login** — Kimi OAuth authentication with redirect handling

### Commission Intake Flow
- 4-step form: Project → Details → Budget → Review
- Project type selection (Editorial, Brand, Publishing, Packaging, Motion, Other)
- Deliverable selection with visual chips
- Budget range and rights usage selection
- Visual reference URL collection
- Draft saving capability (for authenticated users)
- Direct submission to backend with commission event tracking

### Client Dashboard
- Statistics overview (Active, Drafts, Completed)
- Status-filtered commission table
- Inline actions: Submit draft, View detail, Delete
- Full commission history with activity timeline

### Commission Detail
- Complete commission overview with all fields
- Activity timeline showing status changes and events
- Status pipeline visualization
- JSON summary download
- Direct submit action for draft commissions

### Support Chat Widget
- Floating chat panel accessible from any page
- Real-time messaging with 10-second polling
- Message history persistence via database
- Distinct styling for staff vs client messages

### Admin Features
- Admin-only endpoints for listing all commissions
- Status update capability with event logging
- Statistics aggregation

## Database Schema

### `users` (OAuth-managed)
| Column | Type | Description |
|--------|------|-------------|
| id | serial PK | Auto-increment |
| unionId | varchar(255) | Kimi OAuth union ID |
| name | varchar(255) | Display name |
| email | varchar(320) | User email |
| avatar | text | Avatar URL |
| role | enum('user','admin') | Role-based access |
| createdAt | timestamp | Registration time |

### `commissions`
| Column | Type | Description |
|--------|------|-------------|
| id | serial PK | Auto-increment |
| userId | bigint unsigned FK | Owner |
| title | varchar(255) | Project title |
| projectType | enum | Type of project |
| description | text | Detailed brief |
| deliverables | json | Array of deliverables |
| deadline | date | Target delivery |
| budget | enum | Budget range |
| rightsUsage | enum | Rights arrangement |
| visualReferences | json | Reference image URLs |
| status | enum | Pipeline status |
| createdAt/updatedAt | timestamp | Timestamps |

### `commissionEvents`
Tracks all status changes, notes, and milestones for each commission.

### `messages`
Stores chat messages between clients and studio support staff.

## API Endpoints (tRPC Routers)

### `commission.*`
- `commission.list` — List user's commissions (optional status filter)
- `commission.getById` — Get single commission with events
- `commission.create` — Create new commission (starts as draft)
- `commission.update` — Update commission fields
- `commission.delete` — Delete commission
- `commission.submit` — Submit draft for review

### `message.*`
- `message.list` — List messages (optional commission filter)
- `message.create` — Send new message

### `admin.*` (admin only)
- `admin.listCommissions` — List all commissions with user info
- `admin.updateStatus` — Update any commission status
- `admin.getStats` — Platform-wide statistics

## Design System

### Colors
- **Black `#1a1a1a`** — Primary text, borders, structural elements
- **Acid Yellow `#F9FF00`** — Primary actions, highlights, status indicators
- **Vibrant Red `#FF0004`** — Secondary actions, critical alerts, hover effects
- **White `#FFFFFF`** — Background

### Typography
- **Oswald** — All headings, uppercase, tight tracking (-0.02em to -0.04em)
- **Inter** — Body text, table data, form inputs

### Borders
- **3px solid black** — Used ubiquitously on all structural elements
- **0px border-radius** — Sharp corners throughout
- **0px grid gaps** — Elements sit flush with shared borders

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing with all sections |
| `/dashboard` | Dashboard | Client commission tracking |
| `/commission/:id` | Commission Detail | Single commission view |
| `/login` | Login | OAuth authentication |
| `*` | NotFound | 404 page |

## File Structure

```
app/
├── api/
│   ├── boot.ts                 # Hono server entry
│   ├── context.ts              # tRPC context with auth
│   ├── middleware.ts           # tRPC procedures (public/authed/admin)
│   ├── router.ts               # Root router
│   ├── auth-router.ts          # Auth endpoints
│   ├── routers/
│   │   ├── commission.ts       # Commission CRUD
│   │   ├── message.ts          # Chat messaging
│   │   └── admin.ts            # Admin operations
│   └── queries/connection.ts   # Drizzle DB connection
├── db/
│   ├── schema.ts               # All table definitions
│   └── relations.ts            # Drizzle relations
├── contracts/
│   └── constants.ts            # Shared constants
├── src/
│   ├── pages/
│   │   ├── Home.tsx            # Landing page
│   │   ├── Dashboard.tsx       # Client dashboard
│   │   ├── CommissionDetail.tsx # Detail view
│   │   ├── Login.tsx           # Auth page
│   │   └── NotFound.tsx        # 404 page
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with video
│   │   ├── Portfolio.tsx       # Portfolio grid
│   │   ├── Process.tsx         # 3-step sticky process
│   │   ├── Roster.tsx          # Talent table
│   │   └── InquiryForm.tsx     # Commission intake form
│   ├── components/
│   │   ├── Navigation.tsx      # Grid-based nav
│   │   └── ChatWidget.tsx      # Floating chat
│   ├── hooks/
│   │   └── useAuth.ts          # Auth state hook
│   ├── providers/
│   │   └── trpc.tsx            # tRPC client setup
│   ├── App.tsx                 # Router setup
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles + design tokens
└── public/                     # Static assets (images, video)
```

## Deployment

Deployed via `website_version_manager` (version ID: `b078cfd`).
