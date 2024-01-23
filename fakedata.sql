--
-- PostgreSQL database dump
--

-- Dumped from database version 14.10
-- Dumped by pg_dump version 14.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: portfolios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.portfolios (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    status boolean DEFAULT true NOT NULL,
    "isMain" boolean DEFAULT false NOT NULL,
    "UserId" integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    last_updated timestamp with time zone NOT NULL
);


ALTER TABLE public.portfolios OWNER TO postgres;

--
-- Name: portfolios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.portfolios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.portfolios_id_seq OWNER TO postgres;

--
-- Name: portfolios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.portfolios_id_seq OWNED BY public.portfolios.id;


--
-- Name: purchase_sell; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase_sell (
    id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    quantity integer NOT NULL,
    "logType" integer NOT NULL,
    "ShareId" integer NOT NULL,
    "PortfolioId" integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    last_updated timestamp with time zone NOT NULL
);


ALTER TABLE public.purchase_sell OWNER TO postgres;

--
-- Name: purchase_sell_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchase_sell_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.purchase_sell_id_seq OWNER TO postgres;

--
-- Name: purchase_sell_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchase_sell_id_seq OWNED BY public.purchase_sell.id;


--
-- Name: shares; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shares (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "lastPrice" numeric(10,2) NOT NULL,
    symbol character varying(3) NOT NULL,
    status boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone NOT NULL,
    last_updated timestamp with time zone NOT NULL
);


ALTER TABLE public.shares OWNER TO postgres;

--
-- Name: shares_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shares_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shares_id_seq OWNER TO postgres;

--
-- Name: shares_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shares_id_seq OWNED BY public.shares.id;


--
-- Name: shares_of_portfolios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shares_of_portfolios (
    id integer NOT NULL,
    quantity integer NOT NULL,
    price numeric(10,2) NOT NULL,
    "ShareId" integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    last_updated timestamp with time zone NOT NULL,
    "PortfolioId" integer
);


ALTER TABLE public.shares_of_portfolios OWNER TO postgres;

--
-- Name: shares_of_portfolios_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shares_of_portfolios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shares_of_portfolios_id_seq OWNER TO postgres;

--
-- Name: shares_of_portfolios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shares_of_portfolios_id_seq OWNED BY public.shares_of_portfolios.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255),
    status boolean DEFAULT true NOT NULL,
    role integer DEFAULT 2,
    created_at timestamp with time zone NOT NULL,
    last_updated timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: portfolios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.portfolios ALTER COLUMN id SET DEFAULT nextval('public.portfolios_id_seq'::regclass);


--
-- Name: purchase_sell id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_sell ALTER COLUMN id SET DEFAULT nextval('public.purchase_sell_id_seq'::regclass);


--
-- Name: shares id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares ALTER COLUMN id SET DEFAULT nextval('public.shares_id_seq'::regclass);


--
-- Name: shares_of_portfolios id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares_of_portfolios ALTER COLUMN id SET DEFAULT nextval('public.shares_of_portfolios_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: portfolios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.portfolios (id, name, status, "isMain", "UserId", created_at, last_updated) FROM stdin;
1	Main Portfolio	t	t	1	2024-01-22 09:12:11.853+03	2024-01-22 09:12:11.853+03
2	Main Portfolio	t	t	2	2024-01-22 09:12:24.64+03	2024-01-22 09:12:24.64+03
3	Main Portfolio	t	t	3	2024-01-22 09:12:48.234+03	2024-01-22 09:12:48.234+03
4	Main Portfolio	t	t	4	2024-01-22 09:12:59.137+03	2024-01-22 09:12:59.137+03
\.


--
-- Data for Name: purchase_sell; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.purchase_sell (id, price, quantity, "logType", "ShareId", "PortfolioId", created_at, last_updated) FROM stdin;
1	14.55	1	1	1	2	2024-01-22 13:56:07.579+03	2024-01-22 13:56:07.579+03
2	14.55	3	1	1	2	2024-01-22 13:56:12.893+03	2024-01-22 13:56:12.893+03
3	1005.00	3	1	6	2	2024-01-22 13:56:42.2+03	2024-01-22 13:56:42.2+03
4	685.55	2	1	7	2	2024-01-22 13:56:50.373+03	2024-01-22 13:56:50.373+03
5	700.55	1	2	7	2	2024-01-22 14:00:22.556+03	2024-01-22 14:00:22.556+03
6	490.55	1	2	6	2	2024-01-22 14:00:37.232+03	2024-01-22 14:00:37.232+03
7	685.55	2	1	7	1	2024-01-23 05:33:15.679+03	2024-01-23 05:33:15.679+03
8	685.55	2	1	7	1	2024-01-23 05:37:03.188+03	2024-01-23 05:37:03.188+03
9	14.55	2	1	1	1	2024-01-23 05:38:38.037+03	2024-01-23 05:38:38.037+03
10	14.55	2	2	1	1	2024-01-23 05:38:41.819+03	2024-01-23 05:38:41.819+03
11	700.55	1	2	7	1	2024-01-23 05:41:10.199+03	2024-01-23 05:41:10.199+03
12	700.55	1	2	7	1	2024-01-23 05:41:58.393+03	2024-01-23 05:41:58.393+03
13	14.55	6	1	1	1	2024-01-23 05:43:43.643+03	2024-01-23 05:43:43.643+03
14	685.55	6	1	7	1	2024-01-23 05:43:51.326+03	2024-01-23 05:43:51.326+03
15	700.55	1	2	7	1	2024-01-23 05:44:19.95+03	2024-01-23 05:44:19.95+03
16	685.55	1	1	7	1	2024-01-23 05:45:49.089+03	2024-01-23 05:45:49.089+03
17	685.55	1	2	7	1	2024-01-23 05:49:18.144+03	2024-01-23 05:49:18.144+03
18	685.55	1	2	7	1	2024-01-23 05:49:33.535+03	2024-01-23 05:49:33.535+03
19	685.55	1	2	7	1	2024-01-23 05:50:33.23+03	2024-01-23 05:50:33.23+03
20	685.55	1	2	7	1	2024-01-23 05:50:51.234+03	2024-01-23 05:50:51.234+03
21	685.55	1	1	7	1	2024-01-23 05:53:17.807+03	2024-01-23 05:53:17.807+03
22	685.55	1	2	7	1	2024-01-23 05:53:29.952+03	2024-01-23 05:53:29.952+03
23	700.55	1	2	7	1	2024-01-23 05:55:59.893+03	2024-01-23 05:55:59.893+03
24	700.55	1	1	7	1	2024-01-23 05:56:11.486+03	2024-01-23 05:56:11.486+03
25	700.55	1	1	7	1	2024-01-23 05:57:00.651+03	2024-01-23 05:57:00.651+03
26	710.55	1	2	7	1	2024-01-23 05:59:03.037+03	2024-01-23 05:59:03.037+03
27	710.55	1	1	7	1	2024-01-23 05:59:43.397+03	2024-01-23 05:59:43.397+03
\.


--
-- Data for Name: shares; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shares (id, name, "lastPrice", symbol, status, created_at, last_updated) FROM stdin;
1	Atlas Jet	14.55	AJS	t	2024-01-22 13:13:37.224+03	2024-01-22 13:13:37.224+03
2	Konya Çimento	69.99	KCM	t	2024-01-22 13:14:06.642+03	2024-01-22 13:14:06.642+03
3	Burgu Makarna	250.00	BRM	t	2024-01-22 13:14:32.809+03	2024-01-22 13:14:32.809+03
4	Aselsan	45.00	ASL	t	2024-01-22 13:14:56.633+03	2024-01-22 13:14:56.633+03
5	Türk Radyo Televizyon	1005.00	TRT	t	2024-01-22 13:15:23.747+03	2024-01-22 13:15:23.747+03
6	Koç Holding	1005.00	KOC	t	2024-01-22 13:15:43.781+03	2024-01-22 13:15:43.781+03
7	Sabancı Holding	710.55	SBC	t	2024-01-22 13:16:50.794+03	2024-01-23 05:59:03.056+03
\.


--
-- Data for Name: shares_of_portfolios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shares_of_portfolios (id, quantity, price, "ShareId", created_at, last_updated, "PortfolioId") FROM stdin;
1	4	14.55	1	2024-01-22 13:56:07.633+03	2024-01-22 13:56:12.9+03	2
3	1	700.55	7	2024-01-22 13:56:50.38+03	2024-01-22 14:00:22.571+03	2
2	2	490.55	6	2024-01-22 13:56:42.209+03	2024-01-22 14:00:37.239+03	2
6	6	14.55	1	2024-01-23 05:43:43.671+03	2024-01-23 05:43:43.671+03	1
4	5	715.55	7	2024-01-23 05:33:15.719+03	2024-01-23 05:59:43.41+03	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, status, role, created_at, last_updated) FROM stdin;
1	name	name@example.com	$2b$04$QwJyxeuv8hknGwvqC0vEVO10kZ8c8a1EMGSJhilRudlrrFfLDLD9K	t	2	2024-01-22 09:12:11.829+03	2024-01-22 09:12:11.829+03
2	example	example@example.com	$2b$04$ukXZk3bOl86APi0RKFvEv.AxikC3V97maZ/efyxCg6LrqyfVnf6DO	t	2	2024-01-22 09:12:24.635+03	2024-01-22 09:12:24.635+03
3	typesc	typesc@example.com	$2b$04$FasT1uct65fQvd.LwL6TSeivsd8CrraJ0jYe3qk/hANcDF0q.NRb2	t	2	2024-01-22 09:12:48.232+03	2024-01-22 09:12:48.232+03
4	javasc	javasc@example.com	$2b$04$gSsxusJmrKhN.AgdlO51u.Dmwa6F5mkCh6sNleMjHIan9I5jpwM9O	t	2	2024-01-22 09:12:59.134+03	2024-01-22 09:12:59.134+03
\.


--
-- Name: portfolios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.portfolios_id_seq', 4, true);


--
-- Name: purchase_sell_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.purchase_sell_id_seq', 27, true);


--
-- Name: shares_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shares_id_seq', 7, true);


--
-- Name: shares_of_portfolios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.shares_of_portfolios_id_seq', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: portfolios portfolios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.portfolios
    ADD CONSTRAINT portfolios_pkey PRIMARY KEY (id);


--
-- Name: purchase_sell purchase_sell_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_sell
    ADD CONSTRAINT purchase_sell_pkey PRIMARY KEY (id);


--
-- Name: shares shares_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares
    ADD CONSTRAINT shares_name_key UNIQUE (name);


--
-- Name: shares_of_portfolios shares_of_portfolios_ShareId_PortfolioId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares_of_portfolios
    ADD CONSTRAINT "shares_of_portfolios_ShareId_PortfolioId_key" UNIQUE ("ShareId", "PortfolioId");


--
-- Name: shares_of_portfolios shares_of_portfolios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares_of_portfolios
    ADD CONSTRAINT shares_of_portfolios_pkey PRIMARY KEY (id);


--
-- Name: shares shares_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares
    ADD CONSTRAINT shares_pkey PRIMARY KEY (id);


--
-- Name: shares shares_symbol_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares
    ADD CONSTRAINT shares_symbol_key UNIQUE (symbol);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: portfolios__user_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX portfolios__user_id ON public.portfolios USING btree ("UserId");


--
-- Name: purchase_sell__portfolio_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX purchase_sell__portfolio_id ON public.purchase_sell USING btree ("PortfolioId");


--
-- Name: purchase_sell__share_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX purchase_sell__share_id ON public.purchase_sell USING btree ("ShareId");


--
-- Name: purchase_sell_log_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX purchase_sell_log_type ON public.purchase_sell USING btree ("logType");


--
-- Name: shares_of_portfolios__portfolio_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX shares_of_portfolios__portfolio_id ON public.shares_of_portfolios USING btree ("PortfolioId");


--
-- Name: shares_of_portfolios__share_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX shares_of_portfolios__share_id ON public.shares_of_portfolios USING btree ("ShareId");


--
-- Name: shares_symbol; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX shares_symbol ON public.shares USING btree (symbol);


--
-- Name: users_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email ON public.users USING btree (email);


--
-- Name: portfolios portfolios_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.portfolios
    ADD CONSTRAINT "portfolios_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: purchase_sell purchase_sell_PortfolioId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_sell
    ADD CONSTRAINT "purchase_sell_PortfolioId_fkey" FOREIGN KEY ("PortfolioId") REFERENCES public.portfolios(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: purchase_sell purchase_sell_ShareId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase_sell
    ADD CONSTRAINT "purchase_sell_ShareId_fkey" FOREIGN KEY ("ShareId") REFERENCES public.shares(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: shares_of_portfolios shares_of_portfolios_PortfolioId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares_of_portfolios
    ADD CONSTRAINT "shares_of_portfolios_PortfolioId_fkey" FOREIGN KEY ("PortfolioId") REFERENCES public.portfolios(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: shares_of_portfolios shares_of_portfolios_ShareId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shares_of_portfolios
    ADD CONSTRAINT "shares_of_portfolios_ShareId_fkey" FOREIGN KEY ("ShareId") REFERENCES public.shares(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

