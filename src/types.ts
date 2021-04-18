export type UpdateFunction = (key: string, value: any) => void;
export type GetPathFunction = () => (string | number)[];
export type ResetFunction = (key: string) => void;

export type ItemParams = {
  name: string;
  value: any;
  initialValue: any;
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
  update: UpdateFunction;
  getPath: GetPathFunction;
  reset: ResetFunction;
}