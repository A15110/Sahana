import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owzgshvflznrgneklxap.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93emdzaHZmbHpucmduZWtseGFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNDcwNDksImV4cCI6MjA0ODcyMzA0OX0.sr17gmw-6d1hWyNgO0IfKpoyLN3ko1mMnP3VbxPkMr8';

export const supabase = createClient(supabaseUrl, supabaseKey);