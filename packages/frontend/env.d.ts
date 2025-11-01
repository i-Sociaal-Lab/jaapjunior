/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_TEST_ENV?: string;
    readonly VITE_ENABLE_MODEL_CONTROLS?: string;
    readonly VITE_ENABLED_AGENTS?: string;
    readonly VITE_ENABLE_FEEDBACK?: string;
}
