import {createClient} from '@supabase/supabase-js'
import { createElement } from 'react';

const URL = 'https://tozvaqlqufjxpkhyuxqr.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvenZhcWxxdWZqeHBraHl1eHFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NjU3MTEsImV4cCI6MjAyODU0MTcxMX0.SO2qV9feN5LUMVDQ7WiheodNMRnqKfKaHlshj7nWR4A';

export const supabase = createClient(URL, API_KEY);
