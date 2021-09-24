
it('should have a env vars', () => {
      expect(process.env.REACT_APP_FIREBASE_API_KEY).toBeDefined();
      expect(process.env.REACT_APP_AUTH_DOMAIN).toBeDefined();
      expect(process.env.REACT_APP_PROJECT_ID).toBeDefined();
      expect(process.env.REACT_APP_STORAGE_BUCKET).toBeDefined();
      expect(process.env.REACT_APP_MESSAGING_SENDER_ID).toBeDefined();
      expect(process.env.REACT_APP_APP_ID).toBeDefined();
      expect(process.env.REACT_APP_MEASUREMENT_ID).toBeDefined();
      expect(process.env.REACT_APP_DATABASE_URL).toBeDefined();
  });
