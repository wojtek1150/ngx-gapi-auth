import { async, TestBed } from '@angular/core/testing';
import { GoogleOauthModule } from './common-util-google-oauth.module';

describe('CommonUtilGoogleOauthModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GoogleOauthModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleOauthModule).toBeDefined();
  });
});
