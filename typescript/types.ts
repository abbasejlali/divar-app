type RefreshTokenValidatServerType = () => Promise<
  | {
      success: Boolean;
      message: String;
    }
  | undefined
>;

export { type RefreshTokenValidatServerType };
